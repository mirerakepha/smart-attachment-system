from pydantic import BaseModel

class UpdateProfile(BaseModel):
    name: str

class UpdateNotification(BaseModel):
    notification_frequency: str