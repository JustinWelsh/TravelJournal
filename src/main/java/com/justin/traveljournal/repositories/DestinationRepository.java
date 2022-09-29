package com.justin.traveljournal.repositories;

import com.justin.traveljournal.models.Destination;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DestinationRepository extends JpaRepository<Destination, Long> {
}
