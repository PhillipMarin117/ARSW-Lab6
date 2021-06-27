package edu.escuelaing.arsw.app;

import java.util.*;
import java.util.logging.*;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import org.springframework.web.bind.annotation.RequestParam;

@SpringBootApplication
@RestController
public class WebSiteController {

    @Resource
    private HttpServletRequest request;

    public static void main(String[] args) {
        SpringApplication.run(WebSiteController.class, args);
    }

    @GetMapping("/")
    public String TableroOnline(Model model) {
        return "TableroOnline";
    }

    @GetMapping("/status")
    public String status() {
        sessionManagerment();
        String name = (String) request.getSession().getAttribute("name");
        // System.out.println(SharedMemory.getInstance().toString());
        return "{\"status\":\"Greetings from Spring Boot. " + name + ". " + java.time.LocalDate.now() + ", " +
                java.time.LocalTime.now() + ". " + "The server is Runnig!\"}";
    }

    @GetMapping("/setname")
    public String setName(@RequestParam(value = "name", defaultValue = "anonimo") String name) {
        request.getSession().setAttribute("name", name);
        SharedMemory.getInstance().add(name);
        return String.format("Hello %s!", name);
    }

    public void sessionManagerment() {
        System.out.println(request.getSession().getId());
    }

    @PostMapping("/addData")
    @ResponseBody
    public void addPoint(@RequestParam(value = "data") String x) {
        String name = (String) request.getSession().toString();
        if (x != null && !x.isEmpty() ) {
            String[] a = x.split(",");
            Double dx = Double.parseDouble(a[0]);
            Double dy = Double.parseDouble(a[1]);
            SharedMemory.getInstance().addd(new Data(name,dx,dy));
        }

    }

    @GetMapping("/getdibujo")
    public String getDibujo() {
        try {
            ArrayList < Data > tem = SharedMemory.getInstance().getDatos();
            String name = (String) request.getSession().toString();
            ArrayList < Data > enviar = new ArrayList < Data > ();
            enviar.clear();
            ObjectMapper map = new ObjectMapper();

            for (Data Dat: tem) {
                if (!Dat.getUser().equals(name)) {
                    enviar.add(Dat);
                }
            }
            String jsonString = map.writeValueAsString(enviar);
            return jsonString;

        } catch (JsonProcessingException ex) {
            Logger.getLogger(SharedMemory.class.getName()).log(Level.SEVERE, null, ex);
        }
        return "no hay nada";
    }

}