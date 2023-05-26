import sqlite3


def connect_to_db():
    conn = sqlite3.connect('./E-Commerse.db')
    return conn


def get_user_by_id(id):
    user = {}
    try:
        conn = connect_to_db()
        conn.row_factory = sqlite3.Row
        cur = conn.cursor()
        cur.execute("SELECT * FROM users WHERE id = ?",
                    (id,))
        row = cur.fetchone()

        user["id"] = row["id"]
        user["name"] = row["name"]
        user["email"] = row["email"]
        user["phone"] = row["phone"]
    except Exception as e:
        print(e)
        user = {}

    return user


def get_user_by_email(email):
    user = {}
    try:
        conn = connect_to_db()
        conn.row_factory = sqlite3.Row
        cur = conn.cursor()
        cur.execute("SELECT * FROM users WHERE email = ?",
                    (email,))
        row = cur.fetchone()

        user["id"] = row["id"]
        user["name"] = row["name"]
        user["email"] = row["email"]
        user["phone"] = row["phone"]
        user["password"] = row["password"]
    except Exception as e:
        print(e)
        user = {}

    return user


def update_user(user, id):
    try:
        conn = connect_to_db()
        cur = conn.cursor()
        cur.execute("UPDATE users SET name = ?, phone = ? WHERE id =?",
                    (user["name"], user["phone"], id,))
        conn.commit()
        updated_user = get_user_by_id(id)
    except:
        conn.rollback()
        updated_user = {}
    finally:
        conn.close()

    return updated_user

