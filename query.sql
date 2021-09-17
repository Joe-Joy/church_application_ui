DATABASE NAME - church_application;

CREATE TABLE login_details(
    login_id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(32) NOT NULL,
    confirmPassword VARCHAR(50) NOT NULL,
    PRIMARY KEY (login_id)
)

INSERT INTO login_details VALUES ("jo@gmail.com",12345);


CREATE TABLE seat_allocation(
    seat_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    seat VARCHAR(255) NOT NULL,
    total_seats VARCHAR(50) NOT NULL,
    totoal_price FLOAT  NOT NULL
)