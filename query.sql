DATABASE NAME - church_application;

CREATE TABLE login_details(
    login_id INT NOT NULL AUTO_INCREMENT,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(32) NOT NULL,
    PRIMARY KEY (login_id)
)

INSERT INTO login_details VALUES ("jo@gmail.com",12345);
