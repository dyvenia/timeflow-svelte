from idom import html, use_state, component, event
import requests
from sanic import response
from black import click

from components.input import Input
from components.layout import Row, Column, Container
from components.table import SimpleTable
from components.controls import Button
from config import base_url
from data.sponsors import post_sponsor
from data.clients import client_dropdown


@component
def page():
    name, set_name = use_state("")
    submitted_name, set_submitted_name = use_state("")
    short_name, set_short_name = use_state("")
    submitted_short_name, set_submitted_short_name = use_state("")
    client_id, set_client_id = use_state("")
    _, set_deact_name = use_state("")
    _, set_activ_name = use_state("")

    return Container(
        create_sponsor_form(
            name,
            set_name,
            short_name,
            set_short_name,
            client_id,
            set_client_id,
            set_submitted_name,
            set_submitted_short_name,
        ),
        Column(
            Row(list_sponsors(submitted_name, submitted_short_name)),
        ),
        Row(deactivate_sponsor(set_deact_name)),
        Row(activate_sponsor(set_activ_name)),
    )


@component
def create_sponsor_form(
    name,
    set_name,
    short_name,
    set_short_name,
    client_id,
    set_client_id,
    set_submitted_name,
    set_submitted_short_name,
):
    """
    Create a form that allows admin to add a new sponsor.

    post endpoint: /api/sponsors
    schema: {
        "name": "string",
        "short_name": "string",
        "client_id": "int",
        "is_active": True
        "created_at": "2022-02-17T15:31:39.103Z",
        "updated_at": "2022-02-17T15:31:39.103Z"
    }
    """

    @event(prevent_default=True)
    async def handle_submit(event):
        """Call a post request for the given sponsor when given event is triggered."""
        post_sponsor(name, short_name, client_id)

        # Change the states
        set_submitted_name(name)
        set_submitted_short_name(short_name)

    # Create input field for the name of the sponsor
    inp_name = Input(set_value=set_name, label="name of the sponsor")

    # Create input field for the short name of the sponsor
    inp_short_name = Input(set_value=set_short_name, label="short name of the sponsor")

    # Create a dropdown of clients which can then be selected
    selector_client_name = client_dropdown(set_client_id)

    # Create submit button
    is_disabled = True
    if [name, short_name, client_id] != ["", "", ""]:
        is_disabled = False
    btn = Button(is_disabled, handle_submit, label="Submit")

    return Column(
        Row(
            inp_name,
            inp_short_name,
            selector_client_name,
        ),
        Row(btn),
    )


@component
def list_sponsors(submitted_name, submitted_short_name):
    """
    Return rows consisting of each sponsor along with its client.

    Obtain a json response from a get request to the client endpoint.
    Store in rows the names of the client and sponsor, along with the id.
    Return an HTML div that contains the rows in a table.
    """
    api = f"{base_url}/api/sponsors/active"
    response = requests.get(api)

    rows = []
    for item in response.json():
        d = {
            "Sponsor name": item["sponsor_name"],
            "Sponsor short name": item["sponsor_short_name"],
            "Client name": item["client_name"],
        }
        rows.append(d)
    return html.div({"class": "flex w-full"}, SimpleTable(rows=rows))


@component
def deactivate_sponsor(set_deact_name):
    """Deactivate a sponsor without deleting it."""
    name_to_deact, set_name_to_deact = use_state("")

    def handle_deactivation(event):
        """Set the given sponsor's active column to False."""
        api = f"{base_url}/api/sponsors/{name_to_deact}/deactivate"
        response = requests.put(api)
        set_deact_name(name_to_deact)
        return True

    inp_deact_name = Input(
        set_value=set_name_to_deact, label="sponsor to be deactivated"
    )
    btn = html.button(
        {
            "class": "relative w-fit h-fit px-2 py-1 text-lg border text-gray-50 border-secondary-200",
            "onClick": handle_deactivation,
        },
        "Submit",
    )
    return Column(Row(inp_deact_name), Row(btn))


@component
def activate_sponsor(set_activ_name):
    """Activate a sponsor."""
    name_to_activ, set_name_to_activ = use_state("")

    def handle_activation(event):
        """Set the given sponsor's active column to True."""
        api = f"{base_url}/api/sponsors/{name_to_activ}/activate"
        response = requests.put(api)
        set_activ_name(name_to_activ)
        return True

    inp_deact_name = Input(set_value=set_name_to_activ, label="sponsor to be activated")
    btn = html.button(
        {
            "class": "relative w-fit h-fit px-2 py-1 text-lg border text-gray-50 border-secondary-200",
            "onClick": handle_activation,
        },
        "Submit",
    )
    return Column(Row(inp_deact_name), Row(btn))
