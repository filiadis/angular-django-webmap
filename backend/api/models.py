from django.contrib.gis.db import models

# Create your models here.


class Natura(models.Model):
    id = models.BigIntegerField(primary_key=True)
    geom = models.MultiPolygonField(blank=True, null=True)
    sitecode = models.CharField(max_length=9, blank=True, null=True)
    sitetype = models.CharField(max_length=6, blank=True, null=True)
    site_name = models.CharField(
        db_column='site_name', max_length=254, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'natura'


class AisthDasi(models.Model):
    id = models.CharField(primary_key=True, max_length=200)
    geom = models.MultiPolygonField(blank=True, null=True)
    # Field name made lowercase.
    thesh = models.CharField(
        db_column='THESH', max_length=200, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'aisth_dasi'


class AtipesViomSygk(models.Model):
    id = models.IntegerField(primary_key=True)
    geom = models.MultiPolygonField(blank=True, null=True)
    toponymio = models.CharField(max_length=200, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'atipes_viom_sygk'


class Dimen(models.Model):
    geom = models.MultiPolygonField(blank=True, null=True)
    # Field name made lowercase.
    objectid = models.IntegerField(db_column='OBJECTID', blank=True, null=True)
    # Field name made lowercase.
    lektiko = models.CharField(
        db_column='LEKTIKO', max_length=200, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'dimEn'


class DiethneisSinthikes(models.Model):
    id = models.CharField(primary_key=True, max_length=200)
    geom = models.MultiPolygonField(blank=True, null=True)
    name = models.CharField(max_length=254, blank=True, null=True)
    kode = models.CharField(max_length=254, blank=True, null=True)
    area = models.BigIntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'diethneis_sinthikes'


class DimoiKal(models.Model):
    id = models.CharField(primary_key=True, max_length=100)
    geom = models.MultiPolygonField(blank=True, null=True)
    # Field name made lowercase.
    name = models.CharField(
        db_column='NAME', max_length=200, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'dimoi_kal'


class ElegxKinPer(models.Model):
    id = models.CharField(primary_key=True, max_length=200)
    geom = models.MultiPolygonField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'elegx_kin_per'


class EthnDrymoi(models.Model):
    id = models.CharField(primary_key=True, max_length=200)
    geom = models.MultiPolygonField(blank=True, null=True)
    # Field name made lowercase.
    category = models.CharField(
        db_column='CATEGORY', max_length=200, blank=True, null=True)
    # Field name made lowercase.
    thesh = models.CharField(
        db_column='THESH', max_length=200, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'ethn_drymoi'


class EthnParka(models.Model):
    id = models.IntegerField(primary_key=True)
    geom = models.MultiPolygonField(blank=True, null=True)
    # Field name made lowercase.
    name = models.CharField(
        db_column='NAME', max_length=200, blank=True, null=True)
    # Field name made lowercase.
    zone = models.CharField(
        db_column='ZONE', max_length=200, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'ethn_parka'


class GpsAttikis(models.Model):
    id = models.CharField(primary_key=True, max_length=200)
    geom = models.MultiPolygonField(blank=True, null=True)
    # Field name made lowercase.
    xriseis = models.CharField(
        db_column='XRISEIS', max_length=200, blank=True, null=True)
    # Field name made lowercase.
    shetika = models.CharField(
        db_column='SHETIKA', max_length=200, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'gps_attikis'


class KatAgriasZois(models.Model):
    id = models.BigIntegerField(primary_key=True)
    geom = models.MultiPolygonField(blank=True, null=True)
    kode = models.CharField(max_length=254, blank=True, null=True)
    name = models.CharField(max_length=254, blank=True, null=True)
    fek = models.CharField(max_length=254, blank=True, null=True)
    area = models.BigIntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'kat_agrias_zois'


class LekanesApor(models.Model):
    id = models.CharField(primary_key=True, max_length=200)
    geom = models.MultiPolygonField(blank=True, null=True)
    name = models.CharField(max_length=200, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'lekanes_apor'


class Nomoi(models.Model):
    id = models.CharField(primary_key=True, max_length=200)
    geom = models.MultiPolygonField(blank=True, null=True)
    # Field name made lowercase.
    name_gr = models.CharField(
        db_column='NAME_GR', max_length=200, blank=True, null=True)
    # Field name made lowercase.
    edra = models.CharField(
        db_column='EDRA', max_length=200, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'nomoi'


class ParagogDrast(models.Model):
    geom = models.MultiPolygonField(blank=True, null=True)
    objectid = models.FloatField(blank=True, null=True)
    xrhseis = models.CharField(max_length=200, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'paragog_drast'


class Perifereies(models.Model):
    id = models.CharField(primary_key=True, max_length=200)
    geom = models.MultiPolygonField(blank=True, null=True)
    # Field name made lowercase.
    per = models.CharField(
        db_column='PER', max_length=200, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'perifereies'


class Railway(models.Model):
    geom = models.MultiLineStringField(blank=True, null=True)
    # Field name made lowercase.
    objectid = models.FloatField(db_column='OBJECTID', blank=True, null=True)
    # Field name made lowercase.
    shape_leng = models.FloatField(
        db_column='Shape_Leng', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'railway'


class CorineBiotopes(models.Model):
    id = models.CharField(primary_key=True, max_length=200)
    geom = models.MultiPolygonField(blank=True, null=True)
    site_code = models.CharField(max_length=254, blank=True, null=True)
    # Field renamed because it ended with '_'.
    site_name_field = models.CharField(
        db_column='site_name_', max_length=254, blank=True, null=True)
    threat_tex = models.CharField(max_length=254, blank=True, null=True)
    measures_t = models.CharField(max_length=254, blank=True, null=True)
    measures_n = models.CharField(max_length=254, blank=True, null=True)
    quality = models.CharField(max_length=254, blank=True, null=True)
    vulnerabil = models.CharField(max_length=254, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'corine_biotopes'


class RestBiotopes(models.Model):
    id = models.CharField(primary_key=True, max_length=200)
    geom = models.MultiPolygonField(blank=True, null=True)
    site_code = models.CharField(max_length=254, blank=True, null=True)
    # Field renamed because it ended with '_'.
    site_name_field = models.CharField(
        db_column='site_name_', max_length=254, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'rest_biotopes'


class Tifk(models.Model):
    id = models.CharField(primary_key=True, max_length=200)
    geom = models.MultiPolygonField(blank=True, null=True)
    site_code = models.CharField(max_length=254, blank=True, null=True)
    # Field renamed because it ended with '_'.
    site_name_field = models.CharField(
        db_column='site_name_', max_length=254, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tifk'


class LoipaTopia(models.Model):
    id = models.CharField(primary_key=True, max_length=200)
    geom = models.MultiPolygonField(blank=True, null=True)
    site_code = models.CharField(max_length=254, blank=True, null=True)
    # Field renamed because it ended with '_'.
    site_name_field = models.CharField(
        db_column='site_name_', max_length=254, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'loipa_topia'


class XriseisAktesAttiki(models.Model):
    id = models.IntegerField(primary_key=True)
    geom = models.MultiPolygonField(blank=True, null=True)
    # Field name made lowercase.
    xriseis = models.CharField(
        db_column='XRISEIS', max_length=200, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'xriseis_aktes_attiki'


class ZeaAttikiOdos(models.Model):
    geom = models.MultiPolygonField(dim=3, blank=True, null=True)
    # Field name made lowercase.
    shape_leng = models.FloatField(
        db_column='Shape_Leng', blank=True, null=True)
    # Field name made lowercase.
    shape_area = models.FloatField(
        db_column='Shape_Area', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'zea_attiki_odos'


class ZeaElaiona(models.Model):
    id = models.IntegerField(primary_key=True)
    geom = models.MultiPolygonField(dim=3, blank=True, null=True)
    xrhseis = models.CharField(max_length=200, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'zea_elaiona'


class ZoeMesogeion(models.Model):
    id = models.CharField(primary_key=True, max_length=200)
    geom = models.MultiPolygonField(blank=True, null=True)
    # Field name made lowercase.
    xriseis = models.CharField(
        db_column='XRISEIS', max_length=200, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'zoe_mesogeion'


class ZonesProstasiasAigaleo(models.Model):
    id = models.IntegerField(primary_key=True)
    geom = models.MultiPolygonField(blank=True, null=True)
    # Field name made lowercase.
    zones = models.CharField(
        db_column='ZONES', max_length=200, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'zones_prostasias_aigaleo'


class ZoniParnithas(models.Model):
    geom = models.MultiPolygonField(blank=True, null=True)
    # Field name made lowercase. Field renamed because of name conflict.
    id_0 = models.IntegerField(db_column='ID', blank=True, null=True)
    # Field name made lowercase.
    ypozones = models.CharField(
        db_column='YPOZONES', max_length=200, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'zoni_parnithas'


class ZoniProstasiasLauriou(models.Model):
    id = models.FloatField(primary_key=True)
    geom = models.MultiPolygonField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'zoni_prostasias_lauriou'
