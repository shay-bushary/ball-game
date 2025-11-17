from flask import Blueprint, jsonify

main = Blueprint('main_routes', __name__)

@main.route('/')
def index():
    return jsonify(
        message='Two Steps Main',
        data={}
    ), 200
