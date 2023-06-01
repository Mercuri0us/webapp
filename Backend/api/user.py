from flask import request, jsonify, make_response
from flask_jwt_extended import jwt_required, create_access_token, get_jwt_identity
from flask_restful import Resource
from werkzeug.security import generate_password_hash, check_password_hash

from api.general import *


class User(Resource):
    def post(self):
        user = request.get_json()
        try:
            conn = connect_to_db()
            cur = conn.cursor()
            cur.execute("INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
                        (user['name'], user['email'], generate_password_hash(user['password'], method='scrypt')))
            conn.commit()
            user = get_user_by_id(cur.lastrowid)
            response = make_response(jsonify({"status": 0,
                                              "message": "success",
                                              "data": user}),
                                     201)
        except sqlite3.IntegrityError as e:
            response = make_response(jsonify({"status": -1,
                                              "message": str(e), }),
                                     409)
        except Exception as e:
            conn.rollback()
            response = make_response(jsonify({"status": -1,
                                              "message": str(e), }),
                                     500)
        finally:
            conn.close()

        return response

    class Me(Resource):
        @jwt_required()
        def get(self):
            user = get_user_by_id(get_jwt_identity())
            response = make_response(jsonify({"status": 0,
                                              "message": "success",
                                              "data": user}),
                                     200)
            return response

        @jwt_required()
        def patch(self):
            user = request.get_json()
            updated_user = update_user(user, get_jwt_identity())
            response = make_response(jsonify({"status": 0,
                                              "message": "success",
                                              "data": updated_user}),
                                     200)
            return response

    class SignIn(Resource):
        def post(self):
            user = request.get_json()
            try:
                check = get_user_by_email(user["email"])
                if check_password_hash(check["password"], user["password"]):
                    access_token = create_access_token(identity=check["id"])
                    response = make_response(jsonify({"status": 0,
                                                      "message": "success",
                                                      "data": {
                                                          "id": check["id"],
                                                          "token": access_token
                                                      }}),
                                             200)
                else:
                    response = make_response(jsonify({"status": -1,
                                                      "message": "Wrong email or password.", }),
                                             401)
            except Exception as e:
                response = make_response(jsonify({"status": -1,
                                                  "message": str(e), }),
                                         500)

            return response

    @jwt_required()
    def get(self, userId):
        if userId == get_jwt_identity():
            user = get_user_by_id(userId)
            response = make_response(jsonify({"status": 0,
                                              "message": "success",
                                              "data": user}),
                                     200)
        else:
            response = make_response(jsonify({"status": -1,
                                              "message": "Can't get the other's information"}),
                                     400)
        return response

