package com.example.demo;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class Cliente {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id_cliente;
	
	@Column(name="email")
	private String email;
	
	@Column(name="cpf")
	private String cpf;
	
	@Column(name="senha")
	private String senha;
	
	@Column(name="data_nascimento")
	private String data_nascimento;
	
	public Cliente() {
		
	}
	
	public Cliente(String email, String cpf, String senha, String data_nascimento) {
		super();
		this.email = email;
		this.cpf = cpf;
		this.senha = senha;
		this.data_nascimento = data_nascimento;
		
	}

	public long getId_cliente() {
		return id_cliente;
	}

	public void setId_cliente(long id_cliente) {
		this.id_cliente = id_cliente;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public String getData_nascimento() {
		return data_nascimento;
	}

	public void setData_nascimento(String data_nascimento) {
		this.data_nascimento = data_nascimento;
	}
	
	
	

}
