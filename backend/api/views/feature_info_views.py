from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.gis.geos import GEOSGeometry, Point, Polygon
from ..models import *
import ast


@api_view(['GET'])
def apiView(request):
    data = "Application API"
    return Response(data)


@api_view(['GET'])
def featureInfoView(request, sendInfo):

    nsl = ast.literal_eval(sendInfo)

    # Get coords from request
    coords = nsl[0]

    # Get active layers from request
    lyrs = nsl[1]

    print(lyrs)

    # Assign coordinates
    lat = coords[0]
    lng = coords[1]

    # Create point
    pnt = Point(lng, lat)

    featInfo = {}

    for lyr in lyrs:

        if lyr == 'perifereies':
            for item in Perifereies.objects.filter(geom__intersects=pnt):
                featInfo["perifereies"] = item.per

        if lyr == 'nomoi':
            for item in Nomoi.objects.filter(geom__intersects=pnt):
                featInfo["nomoi"] = item.name_gr

        if lyr == 'dimoi_kal':
            for item in DimoiKal.objects.filter(geom__intersects=pnt):
                featInfo["dimoi_kal"] = item.name

        if lyr == 'dimEn':
            for item in Dimen.objects.filter(geom__intersects=pnt):
                featInfo["dimEn"] = item.lektiko

        if lyr == 'natura':
            for item in Natura.objects.filter(geom__intersects=pnt):
                featInfo["natura"] = item.site_name

        if lyr == 'ethn_drymoi':
            for item in EthnDrymoi.objects.filter(geom__intersects=pnt):
                featInfo["ethn_drymoi"] = item.thesh

        if lyr == 'ethn_parka':
            for item in EthnParka.objects.filter(geom__intersects=pnt):
                featInfo["ethn_parka"] = item.name

        if lyr == 'diethneis_sinthikes':
            for item in DiethneisSinthikes.objects.filter(geom__intersects=pnt):
                featInfo["diethneis_sinthikes"] = item.name

        if lyr == 'aisth_dasi':
            for item in AisthDasi.objects.filter(geom__intersects=pnt):
                featInfo["aisth_dasi"] = item.thesh

        if lyr == 'kat_agrias_zois':
            for item in KatAgriasZois.objects.filter(geom__intersects=pnt):
                featInfo["kat_agrias_zois"] = item.name

        if lyr == 'corine_biotopes':
            for item in CorineBiotopes.objects.filter(geom__intersects=pnt):
                featInfo["corine_biotopes"] = item.site_name_field

        if lyr == 'tifk':
            for item in Tifk.objects.filter(geom__intersects=pnt):
                featInfo["tifk"] = item.site_name_field

        if lyr == 'rest_biotopes':
            for item in RestBiotopes.objects.filter(geom__intersects=pnt):
                featInfo["rest_biotopes"] = item.site_name_field

        if lyr == 'loipa_topia':
            for item in LoipaTopia.objects.filter(geom__intersects=pnt):
                featInfo["loipa_topia"] = item.site_name_field

        if lyr == 'zoni_parnithas':
            for item in ZoniParnithas.objects.filter(geom__intersects=pnt):
                featInfo["zoni_parnithas"] = item.ypozones

        if lyr == 'zones_prostasias_aigaleo':
            for item in ZonesProstasiasAigaleo.objects.filter(geom__intersects=pnt):
                featInfo["zones_prostasias_aigaleo"] = item.zones

        if lyr == 'gps_attikis':
            for item in GpsAttikis.objects.filter(geom__intersects=pnt):
                featInfo["gps_attikis"] = item.xriseis

        if lyr == 'xriseis_aktes_attiki':
            for item in XriseisAktesAttiki.objects.filter(geom__intersects=pnt):
                featInfo["xriseis_aktes_attiki"] = item.xriseis

        if lyr == 'zea_elaiona':
            for item in ZeaElaiona.objects.filter(geom__intersects=pnt):
                featInfo["zea_elaiona"] = item.xrhseis

        if lyr == 'zoe_mesogeion':
            for item in ZoeMesogeion.objects.filter(geom__intersects=pnt):
                featInfo["zoe_mesogeion"] = item.xriseis

        if lyr == 'paragog_drast':
            for item in ParagogDrast.objects.filter(geom__intersects=pnt):
                featInfo["paragog_drast"] = item.xrhseis

        if lyr == 'atipes_viom_sygk':
            for item in AtipesViomSygk.objects.filter(geom__intersects=pnt):
                featInfo["atipes_viom_sygk"] = item.toponymio

    return Response(featInfo)
