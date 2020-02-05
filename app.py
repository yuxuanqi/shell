# -*- encoding: utf-8 -*-
"""
Flask Boilerplate
Author: AppSeed.us - App Generator 
"""

import os
from   flask_frozen import Freezer

from app import app
from app import db

# define custom command
@app.cli.command()
def build():
    freezer = Freezer(app)
    freezer.freeze()

if __name__ == "__main__":

    # db.create_all()
    #port = int(os.environ.get("PORT", 80))
    app.run(host='0.0.0.0', port=8086, debug=True)
