package com.Proyecto_Datos.Proyectodat.repository;

import com.Proyecto_Datos.Proyectodat.entity.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductoRepository extends JpaRepository<Producto, Integer> {
}