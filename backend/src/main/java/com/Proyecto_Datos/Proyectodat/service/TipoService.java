package com.Proyecto_Datos.Proyectodat.service;

import com.Proyecto_Datos.Proyectodat.entity.Tipo;
import com.Proyecto_Datos.Proyectodat.repository.TipoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class TipoService {

    @Autowired
    private TipoRepository tipoRepository;

    public List<Tipo> listarTodos() {
        return tipoRepository.findAll();
    }

    public Tipo guardar(Tipo tipo) {
        return tipoRepository.save(tipo);
    }

    public void eliminar(Long id) {
        tipoRepository.deleteById(id);
    }
}