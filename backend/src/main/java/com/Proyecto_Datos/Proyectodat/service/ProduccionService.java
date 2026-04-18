package com.Proyecto_Datos.Proyectodat.service;

import com.Proyecto_Datos.Proyectodat.entity.Produccion;
import com.Proyecto_Datos.Proyectodat.repository.ProduccionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ProduccionService {

    @Autowired
    private ProduccionRepository produccionRepository;

    public List<Produccion> listarTodos() {
        return produccionRepository.findAll();
    }

    public Produccion guardar(Produccion produccion) {
        return produccionRepository.save(produccion);
    }

    public void eliminar(Long id) {
        produccionRepository.deleteById(id);
    }
}