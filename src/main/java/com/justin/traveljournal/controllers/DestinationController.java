package com.justin.traveljournal.controllers;

import com.justin.traveljournal.models.Destination;
import com.justin.traveljournal.repositories.DestinationRepository;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class DestinationController {
    private final DestinationRepository destinationDao;

    public DestinationController(DestinationRepository destinationDao) {
        this.destinationDao = destinationDao;
    }

    //    TODO: Implement C.R.U.D functionality

    @CrossOrigin
    @GetMapping
    @ResponseBody
    public List<Destination> getAllDestinations() {
        return destinationDao.findAll();
    }

    @CrossOrigin
    @PostMapping
    @ResponseBody
    public Destination createOrUpdateDestination(@RequestBody Destination destination) {
        return destinationDao.save(destination);
    }

    @CrossOrigin
    @DeleteMapping
    @ResponseBody
    public List<Destination> deleteDestination(@RequestBody Destination destination) {
        destinationDao.delete(destination);
        return destinationDao.findAll();
    }
}
