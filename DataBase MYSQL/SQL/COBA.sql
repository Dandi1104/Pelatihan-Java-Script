create database pegawai;

use pegawai;

create table hobi (
id int primary key,
nama_hobi varchar (50) not null);
/* cara lain menulis PK
create table hobi(
id int auto_increment,
nama_hobi varchar(50) not null,
primary key(id));*/

create table asn(
nip char(18) primary key,
nama varchar(100),
id_hobi int,
foreign key(id_hobi) 
references hobi(id));

alter table  asn change nama nama_lengkap varchar(100);

rename table asn to pns;

show databases;
show tables;

drop table pns;
drop database pegawai;

insert into hobi(id,nama_hobi) values
('1', 'Memasak'),
('2',  'Olahraga'),
('3', 'Menyanyi'),
('4', 'Membaca'),
('5', 'Mendaki');


insert into asn values
('123456789098765475', 'Rose','1'),
('235788283821486980', 'Jasmine','2'),
('345678908128394778', 'Daisy','3'),
('456787802378900199', 'Lavender','2'),
('567890908129397839', 'Orchid','1');

select * from hobi;
select * from asn;
delete from asn;
delete from hobi;

update asn set nama  = 'Sunflower' where nip ='235788283821486980';
select nip, nama from asn
where nip in ('123456789098765475', '25788283821486980');