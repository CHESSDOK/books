RENAME TABLE `users` TO `signup`;--> statement-breakpoint
ALTER TABLE `signup` DROP PRIMARY KEY;--> statement-breakpoint
ALTER TABLE `signup` MODIFY COLUMN `name` varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE `signup` MODIFY COLUMN `email` varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE `signup` ADD PRIMARY KEY(`id`);--> statement-breakpoint
ALTER TABLE `signup` DROP COLUMN `created_at`;