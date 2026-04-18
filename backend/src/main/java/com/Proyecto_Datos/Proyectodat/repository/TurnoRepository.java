package com.Proyecto_Datos.Proyectodat.repository;

import com.Proyecto_Datos.Proyectodat.entity.Turno;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TurnoRepository extends JpaRepository<Turno, Integer> {
}