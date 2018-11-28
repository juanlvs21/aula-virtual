use fukuro;

create table usuario(
    usuario varchar(40) not null primary key,
    -- cedula varchar(8) not null primary key,
    nombre varchar(40) not null,
    apellido varchar(40),
    correo varchar(50) unique,
    telefono varchar(11),
    tipo int default 1 not null,
    contra varchar(200) not null
)

create table area(
    id int not null auto_increment primary key,
    nombre varchar(60) not null,
    descripcion varchar(300),
    img varchar(50)
)

create table video(
    id int not null auto_increment primary key,
    titulo varchar(100) not null,
    tipo int not null,
    fecha_public timestamp default current_timestamp,
    id_area int not null,
    foreign key (id_area) references area(id)
    on delete cascade on update cascade
)

create table comentario(
    id int not null auto_increment primary key,
    comentario varchar(2000) not null,
    fecha timestamp default current_timestamp,
    usuario varchar(8) not null,
    video int not null,
    foreign key (usuario) references usuario(usuario)
    on delete cascade on update cascade,
    foreign key (video) references video(id)
    on delete cascade on update cascade
)

create table subscripcion(
    id int not null auto_increment primary key,
    usuario varchar(8) not null,
    area int not null,
    fecha_regis timestamp default current_timestamp,
    foreign key (usuario) references usuario(usuario)
    on delete cascade on update cascade,
    foreign key (area) references area(id)
    on delete cascade on update cascade
)
-- ***********Estructuras para la tabla mongodb***********

-- create table mensaje_privado(
--     id int not null auto_increment primary key,
--     mensaje varchar(3000) not null,
--     fecha timestamp default current_timestamp,
--     visto int default 0,
--     de varchar(8) not null,
--     para varchar(8) not null,
--     foreign key (de) references usuario(cedula)
--     on delete cascade on update cascade,
--     foreign key (para) references usuario(cedula)
--     on delete cascade on update cascade
-- )

-- create table mensaje_area(
--     id int not null auto_increment primary key,
--     mensaje varchar(3000) not null,
--     fecha timestamp default current_timestamp,
--     visto int default 0,
--     usuario varchar(8) not null,
--     area int not null,
--     foreign key (usuario) references usuario(cedula)
--     on delete cascade on update cascade
--     foreign key (area) references area(id)
--     on delete cascade on update cascade
-- )