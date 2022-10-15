CREATE TABLE [IF NOT EXISTS] FrontPlug.FP_users
-- fp users table
(
	uid INTEGER, --user unique id
	uemail TEXT, --user access id(email)
	upw TEXT NOT NULL , --user password
	uname TEXT NOT NULL, --user name
	PRIMARY KEY (uid, uemail),
);



CREATE TABLE [IF NOT EXISTS] FrontPlug.FP_managers
-- fp managers table
(
	mid INTEGER, --manager unique id
	memail TEXT, --manager access id(email)
	mpw TEXT NOT NULL , --manager password
	mname TEXT NOT NULL, --manager name
	mphone TEXT NOT NULL, --manager phone
	mroles TEXT NOT NULL, --manager roles(s:super, p:payment)
	PRIMARY KEY (mid, memail),
);



