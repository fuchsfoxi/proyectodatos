    package com.Proyecto_Datos.Proyectodat.entity;

    import jakarta.persistence.*;
    import java.time.LocalTime;

    @Entity
    @Table(name = "turno")
    public class Turno {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name = "id_turno")
        private int id_turno;

        @Column(nullable = false)
        private String turno;

        @Column(nullable = false)
        private LocalTime hora_fin_pan;

        public int getId_turno() { return id_turno; }
        public void setId_turno(int id_turno) { this.id_turno = id_turno; }
        public String getTurno() { return turno; }
        public void setTurno(String turno) { this.turno = turno; }
        public LocalTime getHora_fin_pan() { return hora_fin_pan; }
        public void setHora_fin_pan(LocalTime hora_fin_pan) { this.hora_fin_pan = hora_fin_pan; }
    }