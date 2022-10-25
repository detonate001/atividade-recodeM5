package com.example.demo;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class Bilhete {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id_bilhete ;
	
	@Column(name="data_bilhete")
	private String data_bilhete;
	
	@Column(name="promocao")
	private String promocao;
	
	@Column(name="hora")
	private String hora;
	
	public Bilhete() {
		
	}
	
	public Bilhete(String data_bilhete, String promocao, String hora) {
		super();
		this.data_bilhete = data_bilhete;
		this.hora = hora;
		this.promocao = promocao;
		
	}

	public long getId_bilhete() {
		return id_bilhete;
	}

	public void setId_bilhete(long id_bilhete) {
		this.id_bilhete = id_bilhete;
	}

	public String getData_bilhete() {
		return data_bilhete;
	}

	public void setData_bilhete(String data_bilhete) {
		this.data_bilhete = data_bilhete;
	}

	public String getPromocao() {
		return promocao;
	}

	public void setPromocao(String promocao) {
		this.promocao = promocao;
	}

	public String getHora() {
		return hora;
	}

	public void setHora(String hora) {
		this.hora = hora;
	}
	
}




