package com.Proyecto_Datos.Proyectodat.service;

import com.Proyecto_Datos.Proyectodat.entity.Turno;
import com.Proyecto_Datos.Proyectodat.repository.TurnoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class TurnoService {

    @Autowired
    private TurnoRepository turnoRepository;

    public List<Turno> listarTodos() {
        return turnoRepository.findAll();
    }

    public Turno guardar(Turno turno) {
        return turnoRepository.save(turno);
    }

    public void eliminar(Integer id) {
        turnoRepository.deleteById(id);
    }
}