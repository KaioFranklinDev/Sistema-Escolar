create database bdApiEscolar;

use  bdApiEscolar;

create table professores (
	codigo int primary key auto_increment,
    nome varchar(50),
    idade int(3)
);

select * from professores;
insert into professores (nome, idade) values ('Agatha Mamona', 1);

