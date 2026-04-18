package com.proyecto_datos.proyecto_datos.entity;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "tipo")
public class Tipo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_tipo")
    private Long id;

    @Column(name = "nombre", nullable = false, length = 100)
    private String nombre;

    // Relación bidireccional (opcional)
    @OneToMany(mappedBy = "tipo")
    private List<Producto> productos;

    // Constr¿() {}

    public Tipo(String nombre) {
        this.nombre = nombre;
    }

    // Getters y Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getNombre() { return nombre; }
    public void setNombre(String nombre) { this.nombre = nombre; }

    public List<Producto> getProductos() { return productos; }
    public void setProductos(List<Producto> productos) { this.productos = productos; }
}