# Copyright 2023 <Votre nom et code permanent>
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

from flask import Flask
from flask import render_template
from flask import request
from flask import g
from database import Database
import random

app = Flask(__name__, static_url_path="", static_folder="static")


def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        g._database = Database()
    return g._database


@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.disconnect()


@app.route('/')
def home():
    animaux = get_db().get_animaux()
    animaux = random.sample(animaux, 5)
    return render_template('index.html', animals=animaux)


@app.route('/form')
def form():
    # À remplacer par le contenu de votre choix.
    return render_template('form.html')


@app.route('/ajout', methods=['POST'])
def ajout():
    db = get_db()
    nom = request.form.get('nom-animal')
    espece = request.form.get('especeanimal')
    
    
    return render_template('ajout.html')

@app.route('/animal/<animal_id>')
def animal(animal_id):
    animal = get_db().get_animal(animal_id)
    return render_template('animal.html', animal=animal)


@app.route('/search', methods=['POST'])
def search():
    query = request.form
    animaux = get_db().get_animaux()
    if query.get('option') == "":
        pass
    elif query.get('option') == "nom":
        animaux = [animal for animal in animaux if query.get('search').lower() in animal['nom'].lower()]
    elif query.get('option') == "espece":
        animaux = [animal for animal in animaux if query.get('search').lower() in animal['espece'].lower()]
    elif query.get('option') == "race":
        animaux = [animal for animal in animaux if query.get('search').lower() in animal['race'].lower()]
    return render_template('search.html', animals=animaux)

if __name__ == '__main__':
    app.run(debug=True)
