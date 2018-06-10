Installing MongoDB

	WINDOWS
		- mongodb.org
		- Click the "Community Server" tab
		- Select your OS and click "Download"



	MAC
		- Install Homebrew from brew.sh
		- In terminal type: brew install mondogb
		- sudo mkdir -p /data/db
		- Check the user by typing: whoami
		- Change the owner to yourself by typing: sudo chown [your user name] /data/db
			- EX: sudo chown thomasxmartinez /data/db


Start Mongo
	Mac
		- In a terminal type mongod
		- Open a new terminal window and type mongo


    Mac users:
    sudo mkdir -p /data/db

    Change owner:

    whoami
    sudo chown [username] /data/db

    - Your MongoDB instance can contain multiple databases

    - A db can have 0 or more collections (tables)

    - Collection can have 0 or more documents (rows)

    - Documents can have 1 or more fields (columns)



    START MONGO
    - mongod in one terminal
    - mongo in a second terminal


    Common commands

    help
    show dbs
    db
    use first_db


    rickgrimes = {"name": "Rick Grimes", "number": "111-1111", "email": "rgrimes@walkingdead.com", "contactCreationDate": new Date()}

    db.first_db.insert(rickgrimes)

    db.first_db.find()
    db.first_db.find().pretty()


    // add field

    rickgrimes.city = "Seattle"

    db.first_db.update({"name": "Rick Grimes"}, rickgrimes)


    // delete

    db.first_db.remove({"name": "Rick Grimes"})
