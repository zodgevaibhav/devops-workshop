cookbook_path ['./cookbooks']

# Path to the local JSON file defining the run list
json_attribs "/path/to/node.json"

# Directory containing cookbooks
#cookbook_path ["/path/to/cookbooks"]

# Directory containing roles
#role_path "/path/to/roles"

# Directory for storing cache files
#file_cache_path "/var/chef/cache"

# Directory for storing backups
#file_backup_path "/var/chef/backup"

# Location of environment files
#environment_path "/path/to/environments"

# Set log level (auto, debug, info, warn, error, fatal)
log_level :info

# Define the log location (file or STDOUT)
log_location STDOUT

# Enable colored output in logs
color true
