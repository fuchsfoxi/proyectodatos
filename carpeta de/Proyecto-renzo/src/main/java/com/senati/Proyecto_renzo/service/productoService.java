package com.senati.Proyecto_renzo.service;
import com.senati.Proyecto_renzo.entity.producto;
import com.senati.Proyecto_renzo.repository.productoRepository;
import org.springframework.stereotype.Service;
import java.util.List;

//IMPORTAMOS LA ANOTACION @SERVICE
// ESTO ES LA CAPA DE LA LOGICA DE NEGOCIO, AQUI VA LAS VALIDACIONES, CALCULOS, ETC
@Service
public class productoService {
    //inyectamos el repositorio para poder acceder a la base de datos

    private final productoRepository productoRepository;

    //contructor: spring inyecta automaticamente el repositorio
    public productoService(productoRepository productoRepository) {
        this.productoRepository = productoRepository;
    }

    //Retona o recive  la lista de todos los productos

    public List<producto> listarTodos(){
        return  productoRepository.findAll();
    }


}
