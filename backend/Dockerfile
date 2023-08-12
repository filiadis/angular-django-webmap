FROM python:3.10-slim-buster
# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN mkdir /django_api
COPY . /django_api

WORKDIR /django_api

RUN apt-get update && apt-get install -y -q --no-install-recommends \
    # dependencies for building Python packages
    build-essential \
    # postgress client (psycopg2) dependencies
    libpq-dev \
    # geodjango dependencies
    binutils libproj-dev gdal-bin \
    # cleaning up unused files to reduce the image size
    && apt-get purge -y --auto-remove -o APT::AutoRemove::RecommendsImportant=false \
    && rm -rf /var/lib/apt/lists/*

RUN pip install --no-cache-dir -r requirements.txt

COPY ./entrypoint.sh /

ENTRYPOINT [ "sh", "/entrypoint.sh" ]