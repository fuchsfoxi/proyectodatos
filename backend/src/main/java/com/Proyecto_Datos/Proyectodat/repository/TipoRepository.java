package com.Proyecto_Datos.Proyectodat.repository;

import com.Proyecto_Datos.Proyectodat.entity.Tipo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface TipoRepository extends JpaRepository<Tipo, Long> {

}