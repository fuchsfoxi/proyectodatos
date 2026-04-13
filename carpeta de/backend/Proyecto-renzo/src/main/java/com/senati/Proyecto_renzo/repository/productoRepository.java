package com.senati.Proyecto_renzo.repository;

import com.senati.Proyecto_renzo.entity.producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

// anotacion @reporsitory interfaz como la capa de acceso a la base de datos
@Repository
public interface productoRepository extends JpaRepository<producto,Long>{
 // NO SECESITAMOS ESCRIBIR NADA AQUI
    //jpaRepository ya tiene todo lo basico
}
