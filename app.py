from flask import Flask, jsonify, render_template,url_for

app = Flask(__name__)


app.config['JSON_AS_ASCII'] = False
app.config['JSON_SORT_KEYS'] = False
app.config['JSONIFY_PRETTYPRINT_REGULAR'] = True

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html'), 200
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=10000, debug=False)