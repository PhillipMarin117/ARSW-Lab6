package edu.escuelaing.arsw.app.board;

public class Data {
    private Double x;
    private Double y;
    private String user;

    public Data(String user, Double x, Double y) {
        this.x = x;
        this.y = y;
        this.user = user;
    }

    public Double getX() {
        return x;
    }

    public void setX(Double x) {
        this.x = x;
    }

    public Double getY() {
        return y;
    }

    public void setY(Double y) {
        this.y = y;
    }
    
    public String getUser() {
        return user;
    }

    public void setUser(String x) {
        this.user = x;
    }

}