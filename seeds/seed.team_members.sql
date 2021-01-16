BEGIN;

INSERT INTO team_members (first_name, last_name, profile_image, phone_number)
VALUES
('Corey', 'Rydstrom','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYh-keAMG_iqE-6tkiXdItnmptDlrtjcmMzA&usqp=CAU', '1234567890'),
('Ross', 'Geller', 'data:image/jpeg;base64,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', '123457890');

COMMIT;