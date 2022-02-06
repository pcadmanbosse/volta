from datetime import datetime
from typing import Dict, List
import pytz


def get_timezones() -> List[str]:
    return pytz.all_timezones


def name_timezone() -> Dict[str, List[str]]:
    return {}


def get_time(requested_timezone: str = "Europe/Paris") -> str:
    timezone = pytz.timezone(requested_timezone)
    datetime_for_timezone = datetime.now(timezone)
    return datetime_for_timezone.strftime("%H:%M:%S")
