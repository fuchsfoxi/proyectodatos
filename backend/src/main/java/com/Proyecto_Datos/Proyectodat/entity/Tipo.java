package com.Proyecto_Datos.Proyectodat.entity;

import jakarta.persistence.*;
//@Entity le dice a hibernate que esta clase  representa una tabla en la BD
@Entity
//@Table indica el nombre exacto de la  tabla en mysql  o mariadb
@Table(name ="tipo")
public class Tipo {
    // @Id marca este campo como clave primaria de la tabla
    // @generatevalue hace que el id se genere automaticamente (autoincrement)

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private long id;

    //nullanble = false significa que este campo no puede estar vasio en la db
    @Column(nullable = false)
    private String tipo;

    // GETTER  O SETTER

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTipo() {
        return tipo;
    }
    public void setTipo(String tipo) {
        this.tipo = tipo;
    }
}
