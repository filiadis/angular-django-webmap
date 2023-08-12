from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.gis.geos import GEOSGeometry, Point, Polygon
from ..models import *


@api_view(['GET'])
def intersectionInfoView(request, sendInfo):
    coords = [float(num_str) for num_str in sendInfo.split(",")]

    polygonInput = []

    i = 0

    while i < len(coords)-1:

        if i == (len(coords)-2):

            polygonInput.append(Point(coords[i], coords[i+1]))
            polygonInput.append(Point(coords[0], coords[1]))

        else:

            polygonInput.append(Point(coords[i], coords[i+1]))

        i += 2

    poly = Polygon(polygonInput)

    featInfo = {}

    item_list = []

    for item in Perifereies.objects.filter(geom__intersects=poly):
        item_list.append(item.per)    
    featInfo["perifereies"] = item_list

    item_list = []
    for item in Nomoi.objects.filter(geom__intersects=poly):
        item_list.append(item.name_gr)    
    featInfo["nomoi"] = item_list

    item_list = []
    for item in DimoiKal.objects.filter(geom__intersects=poly):
        item_list.append(item.name)    
    featInfo["dimoi_kal"] = item_list

    item_list = []
    for item in Dimen.objects.filter(geom__intersects=poly):
        item_list.append(item.lektiko)    
    featInfo["dimEn"] = item_list

    item_list = []
    for item in Railway.objects.filter(geom__intersects=poly):
        item_list.append("yes")    
    featInfo["railway"] = item_list

    item_list = []
    for item in Natura.objects.filter(geom__intersects=poly):
        if item.site_name not in item_list:
            item_list.append(item.site_name)    
    featInfo["natura"] = item_list

    item_list = []
    for item in EthnDrymoi.objects.filter(geom__intersects=poly):
        item_list.append(item.thesh)    
    featInfo["ethn_drymoi"] = item_list

    item_list = []
    for item in EthnParka.objects.filter(geom__intersects=poly):
        if item.name not in item_list:
            item_list.append(item.name)    
    featInfo["ethn_parka"] = item_list

    item_list = []
    for item in DiethneisSinthikes.objects.filter(geom__intersects=poly):
        if item.name not in item_list:
            item_list.append(item.name)    
    featInfo["diethneis_sinthikes"] = item_list

    item_list = []
    for item in AisthDasi.objects.filter(geom__intersects=poly):
        item_list.append(item.thesh)    
    featInfo["aisth_dasi"] = item_list

    item_list = []
    for item in KatAgriasZois.objects.filter(geom__intersects=poly):
        if item.name not in item_list:
            item_list.append(item.name)    
    featInfo["kat_agrias_zois"] = item_list

    item_list = []
    for item in ElegxKinPer.objects.filter(geom__intersects=poly):
        item_list.append("yes")    
    featInfo["elegx_kin_per"] = item_list

    item_list = []
    for item in CorineBiotopes.objects.filter(geom__intersects=poly):
        item_list.append(item.site_name_field)    
    featInfo["corine_biotopes"] = item_list

    item_list = []
    for item in Tifk.objects.filter(geom__intersects=poly):
        item_list.append(item.site_name_field)    
    featInfo["tifk"] = item_list

    item_list = []
    for item in RestBiotopes.objects.filter(geom__intersects=poly):
        item_list.append(item.site_name_field)    
    featInfo["rest_biotopes"] = item_list

    item_list = []
    for item in LoipaTopia.objects.filter(geom__intersects=poly):
        item_list.append(item.site_name_field)    
    featInfo["loipa_topia"] = item_list

    item_list = []
    for item in ZoniParnithas.objects.filter(geom__intersects=poly):
        if item.ypozones not in item_list:
            item_list.append(item.ypozones)    
    featInfo["zoni_parnithas"] = item_list

    item_list = []
    for item in ZonesProstasiasAigaleo.objects.filter(geom__intersects=poly):
        if item.zones not in item_list:
            item_list.append(item.zones)    
    featInfo["zones_prostasias_aigaleo"] = item_list

    item_list = []
    for item in ZoniProstasiasLauriou.objects.filter(geom__intersects=poly):
        item_list.append("yes")    
    featInfo["zoni_prostasias_lauriou"] = item_list

    item_list = []
    for item in GpsAttikis.objects.filter(geom__intersects=poly):
        if item.xriseis not in item_list:
            item_list.append(item.xriseis)    
    featInfo["gps_attikis"] = item_list

    item_list = []
    for item in XriseisAktesAttiki.objects.filter(geom__intersects=poly):
        if item.xriseis not in item_list:
            item_list.append(item.xriseis)    
    featInfo["xriseis_aktes_attiki"] = item_list

    item_list = []
    for item in ZeaAttikiOdos.objects.filter(geom__intersects=poly):
        item_list.append("yes")    
    featInfo["zea_attiki_odos"] = item_list

    item_list = []
    for item in ZeaElaiona.objects.filter(geom__intersects=poly):
        if item.xrhseis not in item_list:
            item_list.append(item.xrhseis)    
    featInfo["zea_elaiona"] = item_list

    item_list = []
    for item in ZoeMesogeion.objects.filter(geom__intersects=poly):
        if item.xriseis not in item_list:
            item_list.append(item.xriseis)    
    featInfo["zoe_mesogeion"] = item_list

    item_list = []
    for item in ParagogDrast.objects.filter(geom__intersects=poly):
        if item.xrhseis not in item_list:
            item_list.append(item.xrhseis)    
    featInfo["paragog_drast"] = item_list

    item_list = []
    for item in AtipesViomSygk.objects.filter(geom__intersects=poly):
        item_list.append(item.toponymio)    
    featInfo["atipes_viom_sygk"] = item_list

    return Response(featInfo)
