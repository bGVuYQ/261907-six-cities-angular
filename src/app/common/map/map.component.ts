import { AfterViewInit, ChangeDetectionStrategy, Component, input, OnChanges } from '@angular/core';
import * as leaflet from 'leaflet';
import { URL_MARKER, URL_MARKER_ACTIVE, MapClass } from '../../../const';
import { Offer, OfferLocationInfo } from '../../types/offer';

const customIcon = leaflet.icon({
  iconUrl: URL_MARKER,
  iconSize: [27, 39],
  iconAnchor: [14, 20]
});

const customIconActive = leaflet.icon({
  iconUrl: URL_MARKER_ACTIVE,
  iconSize: [27, 39],
  iconAnchor: [14, 20]
});

@Component({
  selector: 'app-map',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})

export class MapComponent implements AfterViewInit, OnChanges {
  public className = input.required<MapClass>();
  public offers = input.required<Offer[]>();
  public enteredOffer = input<string>();

  private map: leaflet.Map | null = null;

  private initMap(): void {
    this.map = leaflet.map('map', {
      center: [52.377609, 4.900413],
      zoom: 10
    });

    const tiles = leaflet.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
    });

    this.map.addLayer(tiles);
    this.updateMarkers();
  }

  private updateMarkers() {
    if (!this.map) {
      return;
    }

    const markerLayer = leaflet.layerGroup().addTo(this.map);

    this.offers().forEach((offer: OfferLocationInfo) => {
      const marker = leaflet.marker({
        lat: offer.location.latitude,
        lng: offer.location.longitude
      });

      marker
        .setIcon(
          this.enteredOffer() === offer.id ?
            customIconActive :
            customIcon
        )
        .addTo(markerLayer);
    });
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  ngOnChanges(): void {
    this.updateMarkers();
  }
}
