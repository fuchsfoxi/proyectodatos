package com.senati.Proyecto_renzo.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "producto")
public class producto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_producto")
    private int id;

    @Column(nullable = false, length = 50)
    private String nombre;

    @Column(nullable = false)
    private Double precio;

    @Column(name = "id_tipo", nullable = false)
    private int idTipo;

    // GETTERS Y SETTERS
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getNombre() { return nombre; }
    public void setNombre(String nombre) { this.nombre = nombre; }

    public Double getPrecio() { return precio; }
    public void setPrecio(Double precio) { this.precio = precio; }

    public int getIdTipo() { return idTipo; }
    public void setIdTipo(int idTipo) { this.idTipo = idTipo; }
}