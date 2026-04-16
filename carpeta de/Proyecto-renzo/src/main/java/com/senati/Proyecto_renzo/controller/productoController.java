package com.senati.Proyecto_renzo.controller;

import com.senati.Proyecto_renzo.entity.producto;
import com.senati.Proyecto_renzo.service.productoService;  // ← agrega esto
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;                                     // ← agrega esto

// 3 ANOTACIONES
// indica que esta clase maneja peticiones HTTPS Y DEVUELVE JSON
@RestController
// define la URL base de todos los end-point de esta clase
@RequestMapping("api/producto")
// esta anotacion permite que el front-end pueda llamar a la API
// Si no ponemos esto, el navegador bloquea las peticiones por politicas CORS
@CrossOrigin(origins = "*")

public class productoController {
    // declaramos una variable constante
    // inyectamos el servicio para acceder a la logica del negocio
    private final productoService productoService;

    public productoController(productoService productoService) {
        this.productoService = productoService;
    }

    // GET /api/producto -> devuelve todos los productos en formato JSON
    @GetMapping
    public List<producto> listar() { return productoService.listarTodos(); }

}