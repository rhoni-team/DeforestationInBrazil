SHELL := /bin/bash
.ONESHELL:
VENV_FOLDER = env
DJANGO_PATH = DeforestationInBrazil
FRONTEND_PATH = DeforestationInBrazil/frontend
NVM_PATH_EXEC = ~/.nvm/nvm.sh

lint:
	source $(VENV_FOLDER)/bin/activate;
	pylint $(DJANGO_PATH)/backend $(DJANGO_PATH)/core_view $(DJANGO_PATH)/DeforestationInBrazil || true

autopep:
	source $(VENV_FOLDER)/bin/activate;
	find . -name '*.py' \
		-not -path "*/frontend/node_modules/*" \
		-not -path "*/migrations/*" \
		-not -path "*/env/lib/*" \
		-exec autopep8 --in-place '{}' \;

test:
	source $(VENV_FOLDER)/bin/activate;
	cd $(DJANGO_PATH);
	python manage.py test
