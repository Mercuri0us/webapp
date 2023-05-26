from flask import Flask
from flask_restful import Api
from flask_cors import CORS
from flask_login import LoginManager
from flask_jwt_extended import JWTManager
from api import user

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

login_manager = LoginManager()
login_manager.init_app(app)

app.config["JWT_SECRET_KEY"] = "jwtsecret"
jwt = JWTManager(app)

api = Api(app)
api.add_resource(user.User, "/api/users")
api.add_resource(user.User, "/api/users/<int:userId>", endpoint="get-user")
api.add_resource(user.User.SignIn, "/api/users/signIn")
api.add_resource(user.User.Me, "/api/users/me")

if __name__ == "__main__":
    app.run()
