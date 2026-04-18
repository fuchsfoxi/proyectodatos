package com.Proyecto_Datos.Proyectodat.controller;

import com.Proyecto_Datos.Proyectodat.entity.Produccion;
import com.Proyecto_Datos.Proyectodat.service.ProduccionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("api/Produccion")
@CrossOrigin(origins = "*")
public class ProduccionController {

    @Autowired
    private ProduccionService produccionService;

    @GetMapping
    public List<Produccion> listarTodos() {
        return produccionService.listarTodos();
    }

    @PostMapping
    public Produccion guardar(@RequestBody Produccion produccion) {
        return produccionService.guardar(produccion);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Long id) {
        produccionService.eliminar(id);
    }
}