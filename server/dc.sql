#vue_server_000/db.sql
#1:�Ҵ���ָ��
#2:��ִ��
#����xz��
CREATE DATABASE dc;
USE dc;
#������dc_login
CREATE TABLE dc_login(
  id INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(25),
  upwd  VARCHAR(32)
);
#��Ӷ�����������
INSERT INTO dc_login VALUES(null,'tom',md5('123'));
INSERT INTO dc_login VALUES(null,'jerry',md5('123'));