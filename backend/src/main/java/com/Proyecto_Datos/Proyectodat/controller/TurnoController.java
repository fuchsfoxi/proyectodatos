package com.Proyecto_Datos.Proyectodat.controller;

import com.Proyecto_Datos.Proyectodat.entity.Turno;
import com.Proyecto_Datos.Proyectodat.service.TurnoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("api/Turno")
@CrossOrigin(origins = "*")
public class TurnoController {

    @Autowired
    private TurnoService turnoService;

    @GetMapping
    public List<Turno> listarTodos() {
        return turnoService.listarTodos();
    }

    @PostMapping
    public Turno guardar(@RequestBody Turno turno) {
        return turnoService.guardar(turno);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Integer id) {
        turnoService.eliminar(id);
    }
}