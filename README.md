**Crio Winter of Doing, Stage-2B**

**Tech Stack used:**

* ReactJS
* ExpressJS
* NodeJS
* LowDb
* Axios
* Cors

**Deployed Frontend:** https://xmeme-soh.netlify.app/

**Deployed Backend:** https://xmeme-soh.herokuapp.com/memes

**To run frontend:**

cd frontend

npm install

npm start
**To run backend:**

cd backend

npm install

npm start
**Backend API Endpoints:**


| endpoint | method | Description |
| - | - | - |
| **`/memes`** | **GET** | Returns the current state of Database 'memes' |
| **`/memes`** | **POST** | To Post a json having keys`name`,`caption`,`url` |
| **`/memes/<id>`** | **GET** | Returns the value of an Object having key`id` of value `<id>` |
| **`/memes/<id>`** | **PATCH** | Updates the Object in Database 'memes' having key`id` of value `<id>`. Requires json having keys: `caption`,`url` |
| **`/`** | **ALL** | Returns "Hellow" |
