#vue_server_000/db.sql
#1:我创建指令
#2:你执行
#进入xz库
CREATE DATABASE dc;
USE dc;
#创建表dc_login
CREATE TABLE dc_login(
  id INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(25),
  upwd  VARCHAR(32)
);
#添加二条测试数据
INSERT INTO dc_login VALUES(null,'tom',md5('123'));
INSERT INTO dc_login VALUES(null,'jerry',md5('123'));