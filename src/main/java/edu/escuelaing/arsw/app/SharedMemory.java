package edu.escuelaing.arsw.app;

import java.util.ArrayList;

public class SharedMemory {
	private static final SharedMemory instance = new SharedMemory();
	private ArrayList<String> al = new ArrayList<String>();
	private ArrayList<Data> data= new ArrayList<Data>();

	private SharedMemory() {

	}

	public static SharedMemory getInstance() {
		return instance;
	}

	public void add(String value) {
		al.add(value);
	}

	public void addd(Data value) {
		data.add(value);
		//System.out.println(this.getClass()+ value.getUser());
	}

	public String toString() {
		return al.toString();
	}

	public ArrayList<Data> getDatos(){
		return data;
	}
}