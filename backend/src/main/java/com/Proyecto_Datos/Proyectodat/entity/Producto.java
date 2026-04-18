package com.Proyecto_Datos.Proyectodat.entity;

import jakarta.persistence.*;



@Entity
@Table(name = "producto")
public class Producto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;


    @Column(nullable = false)
    private String nombre;

    @Column(nullable = false)
    private Double precio;


    @ManyToOne
    @JoinColumn(name = "id_tipo", nullable = false)
    private Tipo tipo;


    //GETTER O SETTER


    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Double getPrecio() {
        return precio;
    }

    public void setPrecio(Double precio) {
        this.precio = precio;
    }

    public Tipo getTipo() {
        return tipo;
    }

    public void setTipo(Tipo tipo) {
        this.tipo = tipo;
    }


}