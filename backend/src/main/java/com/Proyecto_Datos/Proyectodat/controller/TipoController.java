package com.Proyecto_Datos.Proyectodat.controller;

import com.Proyecto_Datos.Proyectodat.entity.Tipo;
import com.Proyecto_Datos.Proyectodat.service.TipoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("api/Tipo")
@CrossOrigin(origins = "*")
public class TipoController {

    @Autowired
    private TipoService tipoService;

    @GetMapping
    public List<Tipo> listarTodos() {
        return tipoService.listarTodos();
    }

    @PostMapping
    public Tipo guardar(@RequestBody Tipo tipo) {
        return tipoService.guardar(tipo);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Long id) {
        tipoService.eliminar(id);
    }
}