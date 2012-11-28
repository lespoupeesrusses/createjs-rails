$:.push File.expand_path("../lib", __FILE__)

# Maintain your gem's version:
require "createjs-rails/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = "createjs-rails"
  s.version     = CreatejsRails::VERSION
  s.authors     = ["Ethane Tivano"]
  s.email       = ["TODO: Your email"]
  s.homepage    = "TODO"
  s.summary     = "TODO: Summary of CreatejsRails."
  s.description = "TODO: Description of CreatejsRails."

  s.files = Dir["{app,config,db,lib}/**/*"] + ["MIT-LICENSE", "Rakefile", "README.rdoc"]
  s.test_files = Dir["test/**/*"]

  s.add_dependency "rails", "~> 3.2.1"

  s.add_development_dependency "sqlite3"
end
